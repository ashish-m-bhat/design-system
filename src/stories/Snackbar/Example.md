Code Example

```jsx
<SnackbarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <Button
        onClick={() => setSnackbar({
          show: true,
          variant: 'success',
          message: "Snackbar message"
        })}
      />
    </SnackbarContainer>

```
