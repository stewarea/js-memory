!function r(t,n,e){function i(c,u){if(!n[c]){if(!t[c]){var h="function"==typeof require&&require;if(!u&&h)return h(c,!0);if(o)return o(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(r){var n=t[c][1][r];return i(n?n:r)},f,f.exports,r,t,n,e)}return n[c].exports}for(var o="function"==typeof require&&require,c=0;c<e.length;c++)i(e[c]);return i}({1:[function(r,t,n){var e=r("./../js/memory.js").gameModule;$(function(){var r,t,n,i,o=0,c=new e;$("div").click(function(){if($(this).children().show(),0===o)n=$(this).children().attr("src"),r=$(this),o+=1;else{i=$(this).children().attr("src"),t=$(this),o=0;var e=c.findMatch(n,i);e?5===c.matchCount&&(alert("hurray"),$("div").children().hide(),c.matchCount=0):(r.children().hide(400),t.children().hide(400))}})})},{"./../js/memory.js":2}],2:[function(r,t,n){function e(){this.matchCount=0}e.prototype.findMatch=function(r,t){return r===t&&(this.matchCount+=1,!0)},n.gameModule=e},{}]},{},[1]);