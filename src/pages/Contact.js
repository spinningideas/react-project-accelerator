import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default function Contact() {
	return (
		<Grid container spacing={0}>
			<Grid item xs={12} className="contentpanel-site">
				<h3>Contact</h3>
				<p>Fill out the form to submit contact info - this is example use of form and styling it</p>

				<Grid container spacing={0}>
					<Grid item xs={12} md={6} lg={6} xl={6} className="card-row-column">
						<Card className="card white-bg-color bl-1 bb-1">
							<CardContent>
								<h4 className="card-title">INFO PANEL</h4>
								<p className="card-text">Description.</p>
							</CardContent>
							<CardActions>
								<Button
									className="ml-2"
									color="secondary"
									href="https://material-ui.com/"
									target="_blank"
									rel="noopener"
								>
									More Info
								</Button>
							</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} md={6} lg={6} xl={6} className="card-row-column">
						<Card className="card white-bg-color bl-1 bb-1">
							<CardContent>
								<h4 className="card-title">Form here</h4>
								<p className="card-text">Description.</p>
							</CardContent>
							<CardActions>
								<Button
									className="ml-2"
									color="secondary"
									href="https://create-react-app.dev/"
									target="_blank"
									rel="noopener"
								>
									More Info
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
