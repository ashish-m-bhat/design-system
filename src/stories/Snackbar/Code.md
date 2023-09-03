Code Example

```jsx
<SnackBarContainer snackbar={snackbar} setSnackbar={setSnackbar}>
      <Button
        onClick={() => setSnackbar({
          show: true,
          variant: 'success',
          message: "Snackbar message"
        })}
      />
    </SnackBarContainer>

```