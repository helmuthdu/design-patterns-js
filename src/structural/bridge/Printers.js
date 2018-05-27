function Printer (ink) {
  this.ink = ink
}

function EpsonPrinter (ink) {
  Printer.call(this, ink)
}

EpsonPrinter.prototype.print = function () {
  return `Printer: Epson, Ink: ${this.ink.get()}`
}

function HPPrinter (ink) {
  Printer.call(this, ink)
}

HPPrinter.prototype.print = function () {
  return `Printer: HP, Ink: ${this.ink.get()}`
}

function Ink (type) {
  this.type = type
}

Ink.prototype.get = function () {
  return this.type
}

function AcrylicInk () {
  Ink.call(this, 'acrylic-based')
}

AcrylicInk.prototype = Object.create(Ink.prototype)

function AlcoholInk () {
  Ink.call(this, 'alcohol-based')
}

AlcoholInk.prototype = Object.create(Ink.prototype)

module.exports = { EpsonPrinter, HPPrinter, AcrylicInk, AlcoholInk }
