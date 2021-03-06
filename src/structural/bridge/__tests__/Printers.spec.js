import { expect } from 'chai';
import { AcrylicInk, AlcoholInk, EpsonPrinter, HPPrinter } from '../Printers.js';

describe('structural->bridge: Printers', () => {
  it('should create an Epson printer', () => {
    const printer = new EpsonPrinter(new AlcoholInk());
    const result = printer.print();
    expect(result).to.equal('Printer: Epson, Ink: alcohol-based');
  });

  it('should create an HP printer', () => {
    const printer = new HPPrinter(new AcrylicInk());
    const result = printer.print();
    expect(result).to.equal('Printer: HP, Ink: acrylic-based');
  });
});
