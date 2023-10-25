import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import {
	Container,
	Typography,
	List,
	ListItem,
	ListItemText,
	
	Box,
} from "@mui/material";

const Details = ({ data }) => {
  // Get the news item ID from the URL
  const { id } = useParams();

  const location = useLocation();
  const newsItem = location.state;
console.log(newsItem);

//   // Find the news item with the matching ID
//   const newsItem = data?.find((item) => item.id === id);

  if (!newsItem) {
    return <div>News item not found</div>;
  }

  return (
<Container maxWidth="sm" sx={{ p: "50px" }}>
			<Typography variant="h2" sx={{ mb: "30px" }} textAlign="center">
				News Details
			</Typography>
			<List>
				
					<Box 
						key={newsItem.id}
						sx={{
                            display: 'flex', flexDirection: 'row',
							mb: 4,
							p: 2,
							borderRadius: 4,
							backgroundColor: "#f0f0f0",
						}}
					>
                        <Box sx={{width:'70%'}}>
						<ListItem>
							<ListItemText
								primaryTypographyProps={{ variant: "h4" }}
								secondaryTypographyProps={{ variant: "body1" }}
                                tertiaryTypographyProps={{ variant: "body2" }}
								primary={newsItem.title}
								secondary={newsItem.description}
                               
                                
							/>
                           
   </ListItem>
   <Typography variant="body1"
    sx={{ color: 'grey', marginLeft: '13px' }}>
                Author: {newsItem.author}
              </Typography>
              </Box>
              <Box sx={{ width: '30%',marginTop:'80px' }}>
            <img
              src={newsItem.urltoimage}
              alt={newsItem.title}
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
   </Box>
   </List>
   </Container>
  );
};

export default Details;
 