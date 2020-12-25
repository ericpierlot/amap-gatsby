"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopWrapper = exports.Wrapper = exports.BlocText = exports.Container = exports.GreenBlock = exports.ImageWave = exports.Btn = exports.Title2 = exports.Title1 = exports.TopAccroche = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _acc = _interopRequireDefault(require("../../images/acc.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  margin: auto;\n  img {\n    margin: 0 2rem;\n    width: 8%;\n  }\n  margin-bottom: 1rem;\n  @media (max-width: 1100px) {\n    text-align: center;\n    img {\n      display: none;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  margin-top: 5rem;\n  @media (max-width: 1100px) {\n    width: 90%;\n  }\n  @media (max-width: 1500px) {\n    width: 90%;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n\n  p {\n    font-family: \"RobotoLight\", sans-serif;\n    font-size: 0.9rem;\n    line-height: 1.5rem;\n  }\n  a {\n    font-weight: bold;\n    color: black;\n    transition: color 330ms ease;\n    &:hover {\n      color: #6ec1e4;\n    }\n  }\n  @media (max-width: 1100px) {\n    width: 100%;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 7rem;\n  width: 60%;\n  margin: auto;\n  display: flex;\n  img {\n    width: 40%;\n  }\n  @media (max-width: 1100px) {\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 90%;\n    img {\n      margin: 2rem 0;\n      min-width: 500px;\n    }\n  }\n  @media (max-width: 1500px) {\n    width: 90%;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n  background-color: #abd8bb;\n  transform: translateY(-1px);\n  @media (max-width: 1100px) {\n    height: 250px;\n  }\n  p {\n    font-size: 1.2rem;\n    width: 40%;\n    margin: auto;\n    :first-child {\n      padding-top: 2rem;\n    }\n    @media (max-width: 1100px) {\n      width: 90%;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 3rem;\n  background-image: url(", ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 200px;\n  @media (max-width: 1100px) {\n    margin-top: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  padding: 12px 24px;\n  border: none;\n  outline: none;\n  border-radius: 30px;\n  color: white;\n  font-weight: 700;\n  background-color: #5c026a;\n  cursor: pointer;\n  transition: all 330ms ease;\n  :hover {\n    background-color: #846adc;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 2.2rem;\n  text-transform: uppercase;\n  color: #b3e1c2;\n  padding-bottom: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-family: \"olivier\", sans-serif;\n  font-size: 2rem;\n  color: #54595f;\n  padding-bottom: 1rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin: auto;\n  div {\n    width: 50%;\n    @media (max-width: 1100px) {\n      width: 80%;\n      text-align: center;\n    }\n  }\n  @media (max-width: 1100px) {\n    flex-direction: column;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TopAccroche = _styledComponents["default"].div(_templateObject());

exports.TopAccroche = TopAccroche;

var Title1 = _styledComponents["default"].h2(_templateObject2());

exports.Title1 = Title1;

var Title2 = _styledComponents["default"].h2(_templateObject3());

exports.Title2 = Title2;

var Btn = _styledComponents["default"].button(_templateObject4());

exports.Btn = Btn;

var ImageWave = _styledComponents["default"].div(_templateObject5(), _acc["default"]);

exports.ImageWave = ImageWave;

var GreenBlock = _styledComponents["default"].div(_templateObject6());

exports.GreenBlock = GreenBlock;

var Container = _styledComponents["default"].div(_templateObject7());

exports.Container = Container;

var BlocText = _styledComponents["default"].div(_templateObject8());

exports.BlocText = BlocText;

var Wrapper = _styledComponents["default"].div(_templateObject9());

exports.Wrapper = Wrapper;

var TopWrapper = _styledComponents["default"].div(_templateObject10());

exports.TopWrapper = TopWrapper;