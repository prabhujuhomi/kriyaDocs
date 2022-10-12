import React from 'react';
import { render, screen } from '@testing-library/react';
import Avatar from '../Avatar';
import person from '../images/AvatarImage1.jpeg'

describe('Avatar component tests', () => {
    it('should render Avatar with text', () => {
        render(<Avatar>MSD</Avatar>);
        const rendered = screen.getByText('MSD') 
        expect(rendered).toBeInTheDocument()
    });

    it('should contain an alt tag and alt text to be correct', () => {
        render(<Avatar src={person} alt='avatar-image' />);
        const rendered = screen.getByAltText('avatar-image');
        expect(rendered).toBeTruthy();
        expect(rendered).toContainHTML('img')
        expect(rendered).toHaveAttribute('alt', 'avatar-image');
    });

    it('should contain an src attribute and src value to be correct', () => {
        render(<Avatar src={person} alt='avatar-image' />);
        const rendered = screen.getByAltText('avatar-image');
        expect(rendered).toBeTruthy();
        expect(rendered).toContainHTML('img')
        expect(rendered).toHaveAttribute('src', 'AvatarImage1.jpeg');
    });
});


