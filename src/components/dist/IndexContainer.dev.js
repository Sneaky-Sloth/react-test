"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactRedux = require("react-redux");

var _Index = _interopRequireDefault(require("./Index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { pokemonsFetch } from '../redux/pokemon/action';
// import { pokemonLoading } from '../redux/pokemonLoading/action';
var mapStatetoProps = function mapStatetoProps(state) {
  return {
    pokemon: state.pokemons,
    loading: state.loading
  };
};

var mapDispatchProps = {
  pokemonsFetch: pokemonsFetch,
  pokemonLoading: pokemonLoading
};
var IndexContainer = (0, _reactRedux.connect)(mapStatetoProps, mapDispatchProps)(_Index["default"]);
var _default = IndexContainer;
exports["default"] = _default;