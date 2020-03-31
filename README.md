## Eksperimen dengan MDX

Repo ini berisi eksperimen dengan MDX, sejauh apakah perubahan harus dilakukan terhadap file HTML biasa untuk bisa dirender dengan baik oleh Gatsby dari sebuah file MDX.

Kesimpulan saat ini:

- Tag HTML seperti `<p>`, `<table>` (dan kroni-kroninya), `<code>` bisa dirender as is, cukup memasukkan
- Tag untuk kode panjang seperti berikut:

```
<pre><code>
...
</pre><code>
```

Perlu diconvert menjadi:
\`\`\`
...
\`\`\`
