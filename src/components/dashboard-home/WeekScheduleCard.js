import PropTypes from 'prop-types';

import React from 'react';

import { useTheme } from '@material-ui/core/styles';

import { Card, CardContent, Typography, Box } from '@material-ui/core';

import ScheduleButton from '../dashboard-component/ScheduleButton';

WeekSchedule.propTypes = {
  title: PropTypes.string,
  period: PropTypes.string,
  daystatus: PropTypes.array
};

export default function WeekSchedule({ title, period, daystatus }) {
  const theme = useTheme();
  return (
    <Card>
      <CardContent
        sx={{
          padding: theme.spacing(3, 1),
          [theme.breakpoints.up('md')]: {
            padding: theme.spacing(4),
            margin: 'auto'
          }
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center', mb: 5 }}>
          {title}
          <span style={{ fontSize: '15px', color: 'grey' }}>({period})</span>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          {daystatus.map((day) => (
            <ScheduleButton
              key={day.id}
              weekday={day.weekday}
              icon={day.icon}
              halfday={day.halfday}
              work={day.work}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}