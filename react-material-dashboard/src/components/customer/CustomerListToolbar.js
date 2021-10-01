import {
  Box,
  Card,
  CardContent,
  TextField,
  Grid,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

const CustomerListToolbar = (props) => (
  <Box {...props}>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item md={4}>
              <TextField
                placeholder="Descrição da tarefa"
                label="Descrição:"
                fullWidth
              />
            </Grid>
            <Grid item md={4}>
              <FormControl fullWidth>
                <InputLabel>Categoria:</InputLabel>
                <Select>
                  <MenuItem value="">Selecione...</MenuItem>
                  <MenuItem value="TRABALHO">Trabalho</MenuItem>
                  <MenuItem value="ESTUDOS">Estudos</MenuItem>
                  <MenuItem value="OUTROS">Outros</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={2}>
              <Button variant="contained" color="primary">Adicionar</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default CustomerListToolbar;
