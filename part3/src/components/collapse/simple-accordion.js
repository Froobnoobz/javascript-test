import React from 'react';
import "./simple-accordion.scss";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export function SimpleAccordion(props) {
  const classes = useStyles();

  return (
    <div className={classes.root + " accordion"}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.topic.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {props.topic.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
