import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import Footer from '../common/components/Footer';

import renderWithRouter from '../services/renderWithRouter';

describe('Testando toda a aplicação do Componente Footer', () => {
  it('Verifica se o título aparece no Footer', () => {
    renderWithRouter(<Footer />);

    const title = screen.getByText(/GoShoes/i);
    expect(title).toBeInTheDocument();
  });

  it('Verifica se a frase "Envie um presente e proporcione alegria" aparece no Footer', () => {
    renderWithRouter(<Footer />);

    const phrase = screen.getByText(/Envie um presente e proporcione alegria/i);
    expect(phrase).toBeInTheDocument();
  });

  it('Verifica se os links aparecem no Footer', () => {
    renderWithRouter(<Footer />);

    const Budget = screen.getByText(/Orçamento/i);
    const Discount = screen.getByText(/Descontos/i);
    const Ship = screen.getByText(/Frete/i);
    const Blog = screen.getByText(/Blog/i);
    const About = screen.getByText(/Sobre nós/i);
    const OurMission = screen.getByText(/Nossa Missão/i);

    expect(Budget).toBeInTheDocument();
    expect(Discount).toBeInTheDocument();
    expect(Ship).toBeInTheDocument();
    expect(Blog).toBeInTheDocument();
    expect(About).toBeInTheDocument();
    expect(OurMission).toBeInTheDocument();
  });
});
