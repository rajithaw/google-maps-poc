import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs } from "react-google-maps";
import { StandaloneSearchBox } from "react-google-maps/lib/components/places/StandaloneSearchBox";
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    root: {
        fontFamily: theme.typography.fontFamily,
        position: 'relative',
        marginRight: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit,
        borderRadius: 2,
        background: theme.palette.common.white,
        '&:hover': {
            background: theme.palette.common.white,
        },
        '& $input': {
            transition: theme.transitions.create('width'),
            width: 200,
            '&:focus': {
                width: 250,
            },
        },
    },
    search: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        font: 'inherit',
        padding: `${theme.spacing.unit}px ${theme.spacing.unit}px ${theme.spacing.unit}px ${theme
            .spacing.unit * 9}px`,
        border: 0,
        display: 'block',
        verticalAlign: 'middle',
        whiteSpace: 'normal',
        background: 'none',
        margin: 0, // Reset for Safari
        color: 'inherit',
        width: '100%',
        '&:focus': {
            outline: 0,
        },
    },
});

function AddressSearchBox(props) {
    const { classes, onSearchBoxMounted, bounds, onPlacesChanged, places } = props;

    return (
    <div data-standalone-searchbox="">
        <StandaloneSearchBox
            ref={onSearchBoxMounted}
            bounds={bounds}
            onPlacesChanged={onPlacesChanged}
        >
            <div className={classes.root}>
                <div className={classes.search}>
                    <SearchIcon />
                </div>
                <input className={classes.input} placeholder="Search an address"/>
            </div>
        </StandaloneSearchBox>
        <ol>
            {places.map(({ place_id, formatted_address, geometry: { location } }) =>
                <li key={place_id}>
                    {formatted_address}
                    {" at "}
                    ({location.lat()}, {location.lng()})
        </li>
            )}
        </ol>
    </div>
    );
}

function componentWillMount() {
    const refs = {}

    this.setState({
        places: [],
        onSearchBoxMounted: ref => {
            refs.searchBox = ref;
        },
        onPlacesChanged: () => {
            const places = refs.searchBox.getPlaces();

            this.setState({
                places,
            });

            this.props.addressChangeHandler(places);
        },
    })
}

export default withStyles(styles)(compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ display: 'none' }} />,
        containerElement: <div style={{ display: 'none' }} />
    }),
    lifecycle({
        componentWillMount
    }),
    withScriptjs
)(AddressSearchBox));