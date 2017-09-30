/* 
 * Tipper v3.0.2 - 2014-02-12
 * A jQuery plugin for simple tooltips. Part of the formstone library.
 * http://formstone.it/tipper/
 *
 * Copyright 2014 Ben Plum; MIT Licensed
 */

!function(a) {
  "use strict";
  function b(b) {
    return h.formatter = d,
    a(this).not(".tipper-attached").addClass("tipper-attached").on("mouseenter.tipper", a.extend({}, h, b || {}), c)
  }
  function c(b) {
    g = a("body");
    var c = a(this),
      d = a.extend(!0, {}, b.data, c.data("tipper-options")),
      h = "";
    h += '<div class="tipper ' + d.direction + '">',
    h += '<div class="tipper-content">',
    h += d.formatter.apply(g, [c]),
    h += '<span class="tipper-caret"</span>',
    h += "</div>",
    h += "</div>",
    d.$target = c,
    d.$tipper = a(h),
    g.append(d.$tipper),
    d.$content = d.$tipper.find(".tipper-content"),
    d.$caret = d.$tipper.find(".tipper-caret"),
    d.offset = c.offset(),
    d.height = c.outerHeight(),
    d.width = c.outerWidth(),
    d.tipperPos = {},
    d.caretPos = {},
    d.contentPos = {};
    var i = d.$caret.outerHeight(!0),
      j = d.$caret.outerWidth(!0),
      k = d.$content.outerHeight(!0),
      l = d.$content.outerWidth(!0) + j;
    "right" === d.direction || "left" === d.direction
      ? (d.caretPos.top = (k - i) / 2, d.contentPos.top = -k / 2, "right" === d.direction
        ? d.contentPos.left = j + d.margin
        : "left" === d.direction && (d.contentPos.left = -(l + d.margin)))
      : (d.caretPos.left = (l - j) / 2, d.contentPos.left = -l / 2, "bottom" === d.direction
        ? d.contentPos.top = d.margin
        : "top" === d.direction && (d.contentPos.top = -(k + d.margin))),
    d.$content.css(d.contentPos),
    d.$caret.css(d.caretPos),
    d.follow
      ? d.$target.on("mousemove.tipper", d, e).trigger("mousemove")
      : ("right" === d.direction || "left" === d.direction
        ? (d.tipperPos.top = d.offset.top + d.height / 2, "right" === d.direction
          ? d.tipperPos.left = d.offset.left + d.width
          : "left" === d.direction && (d.tipperPos.left = d.offset.left))
        : (d.tipperPos.left = d.offset.left + d.width / 2, "bottom" === d.direction
          ? d.tipperPos.top = d.offset.top + d.height
          : "top" === d.direction && (d.tipperPos.top = d.offset.top)), d.$tipper.css(d.tipperPos)),
    d.$target.one("mouseleave.tipper", d, f)
  }
  function d(a) {
    return a.data("title")
  }
  function e(a) {
    var b = a.data;
    b.$tipper.css({left: a.pageX, top: a.pageY})
  }
  function f(a) {
    var b = a.data;
    b.$tipper.remove(),
    b.$target.off("mousemove.tipper mouseleave.tipper")
  }
  var g,
    h = {
      direction: "top",
      follow: !1,
      formatter: a.noop,
      margin: 15
    },
    i = {
      defaults: function(b) {
        return h = a.extend(h, b || {}),
        a(this)
      },
      destroy: function() {
        return a(this).trigger("mouseleave.tipper").off(".tipper").removeClass("tipper-attached")
      }
    };
  a.fn.tipper = function(a) {
    return i[a]
      ? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
      : "object" != typeof a && a
        ? this
        : b.apply(this, arguments)
  },
  a.tipper = function(a) {
    "defaults" === a && i.defaults.apply(this, Array.prototype.slice.call(arguments, 1))
  }
}(jQuery);
