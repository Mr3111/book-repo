import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Rating from '@material-ui/lab/Rating';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import axios from "axios";
import {Tooltip} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import configureStore from "../store";
import {useState} from "react";
import {useSelector} from "react-redux";

const _ = require('lodash')

function useData() {
    const [rows, setRows] = useState([]);
    React.useEffect(() => {
        let rows = [];
        const fetchData = async () => {
            const result = await axios(
                'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json',
            );

            rows = result.data.map(book => {
                return {id: book.bookID, ...book}
            });
        };

        fetchData().then(()=>setRows(rows));

    }, []);
    return rows;
}

export default function ColumnVirtualizationGrid() {
    const rows = useData();
    const cart = useSelector(state => state.cart);

    const store = configureStore();

    const addToCart = (prodId) => {
        const item = _.find(rows, {id: prodId});
        store.dispatch({type: 'ADD_ITEM', payload: item})
    }

    const removeFromCart = (prodId) => {
        store.dispatch({type: 'DELETE_ITEM', payload: {id: prodId}})
    }

    const columns = [{field: 'id', hide: true},
        {field: 'bookID', headerName: 'Book ID', hide: true, flex: 1},
        {
            field: 'title', headerName: 'Title', flex: 5,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <strong>
                        {params.value}
                    </strong>
                </Tooltip>),
        },
        {field: 'authors', headerName: 'Authors', flex: 3},
        {
            field: 'average_rating', headerName: 'Rating', flex: 2,
            renderCell: (params) => (
                <Tooltip title={params.value}>
                    <Rating name="half-rating-read" defaultValue={params.value} precision={0.25} readOnly/>
                </Tooltip>

            ),
        },
        {field: 'isbn', headerName: 'ISBN', width: 150},
        {field: 'language_code', headerName: 'Language', width: 115},
        {field: 'ratings_count', headerName: 'Ratings Count', width: 150, type: 'number'},
        {
            field: 'price', headerName: 'Price', width: 100,
            renderCell: (params) => (
                <div>₹{params.value}</div>),
        },
        {
            field: 'add_to_cart', headerName: ' ', flex: 1,
            renderCell: (params) => (
                <div>{!_.find(cart.items, {id: params.getValue('id')}) ?
                    <Tooltip title='Add to cart'>
                        <IconButton onClick={()=>addToCart(params.getValue('id'))} color="primary" aria-label="add to shopping cart">
                            <AddShoppingCartIcon/>
                        </IconButton>
                    </Tooltip> :
                    <Tooltip title='Remove from cart'>
                        <IconButton onClick={()=>removeFromCart(params.getValue('id'), params.getValue('price'))} color="secondary" aria-label="remove from shopping cart">
                            <RemoveShoppingCartIcon/>
                        </IconButton>
                    </Tooltip>}
                </div>),
        }];

    return (
        <div style={{height: 500, width: '100%', align: 'center'}}>
            <DataGrid rows={rows} columns={columns} showToolbar/>
        </div>
    );
}
