import React, { useRef, useState, useEffect } from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const [visible, setVisible] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Stack
      ref={containerRef}
      gap={{ xs: 4, lg: 8 }}
      sx={{
        flexDirection: { xs: 'column', lg: 'row' },
        p: 2,
        alignItems: 'center',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(50px)',
        transition: 'opacity 1s ease-out, transform 1s ease-out',
      }}
    >
      {/* GIF Image */}
      <Box
        component="img"
        src={gifUrl}
        alt={name}
        loading="lazy"
        sx={{
          width: { xs: '100%', lg: '500px' },
          borderRadius: 2,
        }}
      />

      {/* Details Section */}
      <Stack sx={{ gap: { xs: 3, lg: 5 }, textAlign: { xs: 'center', lg: 'left' } }}>
        <Typography
          sx={{ fontSize: { xs: '30px', lg: '64px' } }}
          fontWeight={700}
          textTransform="capitalize"
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '16px', lg: '24px' },
            color: '#4F4C4C',
            lineHeight: { xs: 1.5, lg: 1.6 },
          }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
          of the best exercises to target your {target}. It will help you improve
          your mood and gain energy.
        </Typography>

        {/* Extra Details with Staggered Animation */}
        {extraDetail.map((item, index) => (
          <Stack
            key={item.name}
            direction="row"
            gap={3}
            alignItems="center"
            justifyContent={{ xs: 'center', lg: 'flex-start' }}
            sx={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-50px)',
              transition: `opacity 0.6s ease-out ${0.2 + index * 0.2}s, transform 0.6s ease-out ${0.2 + index * 0.2}s`,
            }}
          >
            <Button
              aria-label={`Icon for ${item.name}`}
              sx={{
                background: '#FFF2DB',
                borderRadius: '50%',
                width: { xs: '70px', sm: '80px', md: '100px' },
                height: { xs: '70px', sm: '80px', md: '100px' },
                minWidth: 'unset',
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.name}
                sx={{ width: { xs: '30px', md: '50px' }, height: 'auto' }}
              />
            </Button>
            <Typography sx={{ fontSize: { xs: '20px', lg: '30px' } }} textTransform="capitalize">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
