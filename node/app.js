(function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function main$lambda(extended) {
    return true;
  }
  function main$lambda_0(req, res) {
    return res.send(generateUser());
  }
  function main$lambda_1(req, res) {
    return res.render('html/index');
  }
  function main$lambda_2(req, res) {
    var name = req.body.nm;
    var role = req.body.rl;
    return res.render('html/outbox', new Outbox(name, role));
  }
  function main$lambda_3() {
    println('Server has started successfully.....');
    return Unit;
  }
  function main(args) {
    var express = require('express');
    var bodyParser = require('body-parser');
    var app = express();
    app.set('view engine', 'ejs');
    app.set('views', 'node');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded(main$lambda));
    app.get('/outbox', main$lambda_0);
    app.get('/', main$lambda_1);
    app.post('/add', main$lambda_2);
    app.listen(3000, main$lambda_3);
  }
  function Outbox(name, role) {
    this.name = name;
    this.role = role;
  }
  Outbox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Outbox',
    interfaces: []
  };
  Outbox.prototype.component1 = function () {
    return this.name;
  };
  Outbox.prototype.component2 = function () {
    return this.role;
  };
  Outbox.prototype.copy_puj7f4$ = function (name, role) {
    return new Outbox(name === void 0 ? this.name : name, role === void 0 ? this.role : role);
  };
  Outbox.prototype.toString = function () {
    return 'Outbox(name=' + Kotlin.toString(this.name) + (', role=' + Kotlin.toString(this.role)) + ')';
  };
  Outbox.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.role) | 0;
    return result;
  };
  Outbox.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.role, other.role)))));
  };
  function generateUser() {
    return [new Outbox('Andrew', 'Developer'), new Outbox('Innocent', 'CEO'), new Outbox('Brian', 'Founder'), new Outbox('David', 'Accountant')];
  }
  _.main_kand9s$ = main;
  _.Outbox = Outbox;
  _.generateUser = generateUser;
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(module.exports, require('kotlin')));
