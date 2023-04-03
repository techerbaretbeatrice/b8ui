# B8UI

UI library

# How to install?

```
npm install b8ui
```

## components

### Button

```javascript
<Button title="buttonTitle" onClick={() => null} />
```

### Select

```javascript
<Select 
    label="selectLabel" 
    options={{
    keyA: "valueA",
    ...
    }}
    onSelect={(selectedValue) => yourStuff(value)}    
/>



```