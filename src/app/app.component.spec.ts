import { AppComponent } from './app.component';

describe('App Component:', () => {
    it('should be truthy', () => {
        let app = new AppComponent();
        expect(app).toBeTruthy();
    });

    it('should calculate', () => {
        let app = new AppComponent();
        expect(app.total).toBe(3);
    });
});