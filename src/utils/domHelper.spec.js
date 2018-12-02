import DomHelper from './DomHelper';

describe('DomHelper', () => {
  describe('loadResource', () => {
    beforeEach(() => {
      document.body.appendChild = jest.fn().mockImplementation(dom => dom.onload());
    });

    it('should append once for load style', () => {
      return DomHelper.loadResource('http://app-one.mixspa.com/1.css').then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
      });
    });

    it('should append once for load script', () => {
      return DomHelper.loadResource('http://app-one.mixspa.com/1.js').then(() => {
        expect(document.body.appendChild).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('#create script', () => {
    let script = DomHelper.createScript('http://test-url/');

    it('should set src attribute', () => {
      expect(script.src).toBe('http://test-url/');
    });

    it('should set type attribute', () => {
      expect(script.type).toBe('text/javascript');
    });

    it('should set charset attribute', () => {
      expect(script.charset).toBe('UTF-8');
    });
  });

  describe('#create style', () => {
    let style = DomHelper.createStyle('http://test-url/');

    it('should set href attribute', () => {
      expect(style.href).toBe('http://test-url/');
    });

    it('should set type attribute', () => {
      expect(style.type).toBe('text/css');
    });

    it('should set rel attribute', () => {
      expect(style.rel).toBe('stylesheet');
    });
  });
});
