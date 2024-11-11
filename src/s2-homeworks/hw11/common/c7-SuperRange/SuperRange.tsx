import React from 'react';
import { Slider, SliderProps } from '@mui/material';

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                // стили для слайдера // пишет студент
                width: '150px',
                height: '4px',
                color: '#01CB22',
                '& .MuiSlider-thumb': {
                    border: '1px solid #01CB22',
                    width: '18px',
                    height: '18px',
                    color: 'white',
                },

                '.css-eg0mwd-MuiSlider-thumb::before': {
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#01CB22',
                },
                '.MuiSlider-rail': {
                    color: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    );
};

export default SuperRange;
