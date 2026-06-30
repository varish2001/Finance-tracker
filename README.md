
# FinTrack Pro - Finance Tracker Application

## 🚀 Project Overview

FinTrack Pro is a complete beginner-friendly finance tracking web application built with vanilla HTML, CSS, and JavaScript. It helps users track their income and expenses with an intuitive dashboard and visual analytics.

## ✨ Features

### 1. **Authentication System**
   - User Registration: Create a new account with username and password
   - User Login: Secure login with validation
   - Session Management: Users stay logged in and can logout anytime
   - Per-User Data: Each user has their own separate transaction history

### 2. **Dashboard**
   - Real-time statistics cards (Balance, Income, Expense, Transaction Count)
   - Income vs Expense chart visualization using Chart.js
   - Transaction list with filtering and search

### 3. **Transaction Management**
   - Add new transactions (Income or Expense)
   - Categorize transactions (Salary, Shopping, Food, Travel, Bills, Other)
   - View all transactions in a clean table format
   - Delete transactions

### 4. **Search & Filter**
   - Search transactions by title
   - Filter by type (Income/Expense/All)
   - Real-time search and filter

### 5. **Additional Features**
   - Dark mode toggle with persistent settings
   - Reset all data with confirmation
   - Logout functionality
   - Responsive design
   - Data persistence using browser localStorage

---

## 📁 Project Structure

```
Finance tracker/
├── index.html           (Optional landing page)
├── login.html           (Login page - entry point)
├── login.js             (Login authentication logic)
├── login.css            (Login page styling)
├── register.html        (Registration page)
├── register.js          (Registration logic)
├── register.css         (Registration styling)
├── dashboard.html       (Main dashboard)
├── dashboard.js         (Dashboard logic & transactions)
├── dashboard.css        (Dashboard styling)
└── logo-removebg-preview.png  (Logo image)
└── bank_PNG3-removebg-preview.png  (Bank icon)
```

---

## 🛠️ How It Works

### Authentication Flow
1. **User visits login.html** (or index.html if created)
2. **First time users**: Click "Register Here" → register.html
3. **New registration**: Enter username & password → Data stored in localStorage
4. **Return to login page**: Enter credentials
5. **Successful login**: Redirected to dashboard.html
6. **Dashboard**: User sees their transactions and statistics

### Data Storage
- **User credentials**: Stored in `localStorage.allUsers`
- **Login status**: Stored in `localStorage.isLoggedIn`
- **Current user**: Stored in `localStorage.currentUser`
- **Transactions**: Stored per user as `localStorage.transactions_[username]`
- **Settings**: Dark mode preference in `localStorage.darkMode`

---

## 🚀 How to Deploy

### Option 1: GitHub Pages (Free, Easy)

1. **Create a GitHub repository**
   - Go to github.com and create a new repository named `finance-tracker`

2. **Upload files**
   - Upload all project files to the repository

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Select main branch as source
   - Your site will be available at: `https://yourusername.github.io/finance-tracker/`

### Option 2: Netlify (Free, Simple)

1. **Go to netlify.com**
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy**
   - Drag and drop your project folder
   - Or connect your GitHub repository
   - Netlify will generate a link like: `https://finance-tracker-xyz.netlify.app/`

3. **Custom domain** (Optional, paid)
   - Add your own domain name

### Option 3: Vercel (Free)

1. **Go to vercel.com**
   - Sign up and import your GitHub repository

2. **Deploy**
   - Vercel automatically deploys
   - Your site will be at: `https://finance-tracker-xyz.vercel.app/`

### Option 4: Traditional Web Hosting

1. **Get hosting** (Bluehost, HostGator, etc.)
2. **Upload files via FTP**
3. **Access your domain**

---

## 📖 How to Use

### 1. **First Time Setup**
```
1. Visit your deployed link
2. Click "Register Here"
3. Enter a username (e.g., "john_doe")
4. Enter a password
5. Click Register
6. You'll be redirected to login page
7. Login with your credentials
8. Dashboard will load
```

### 2. **Adding Transactions**
```
1. Click "➕ Add Transaction" button
2. Fill in:
   - Title: What the transaction is for
   - Amount: How much money
   - Category: Type of transaction
   - Type: Income or Expense
3. Click Save
4. Transaction appears in the list
5. Charts update automatically
```

### 3. **Searching Transactions**
```
1. Use search box to find transactions by title
2. Use filter dropdown to show only Income or Expense
3. Both work together for precise filtering
```

### 4. **Managing Settings**
```
- Dark Mode: Toggle switch for dark theme
- Reset Data: Delete all transactions (with confirmation)
- Logout: Click logout button to return to login page
```

---

## 🎨 Code Structure (Beginner-Friendly)

### Key JavaScript Concepts Used

1. **DOM Selection**
   ```javascript
   const element = document.querySelector("#id");
   ```

2. **Event Listeners**
   ```javascript
   element.addEventListener("click", function() {
       // Code runs when clicked
   });
   ```

3. **localStorage (Data Persistence)**
   ```javascript
   localStorage.setItem("key", "value");
   let value = localStorage.getItem("key");
   ```

4. **Arrays & Loops**
   ```javascript
   let items = [];
   for (let i = 0; i < items.length; i++) {
       console.log(items[i]);
   }
   ```

5. **Functions**
   ```javascript
   function doSomething() {
       // Code here
   }
   ```

---

## 🔒 Security Notes

**Important**: This is a beginner learning project. For production:

- ❌ **DO NOT** store passwords in plain text (use server-side hashing)
- ❌ **DO NOT** rely on client-side validation alone
- ✅ **DO** use a backend server with authentication
- ✅ **DO** use HTTPS for all connections
- ✅ **DO** encrypt sensitive data

---

## 🐛 Common Issues & Solutions

### Issue: Data disappears after refreshing
**Solution**: Clear your browser cache and refresh again, or check localStorage in DevTools

### Issue: Can't login after registering
**Solution**: Make sure you entered the exact same username and password

### Issue: Transactions showing for wrong user
**Solution**: Each browser stores separate data. Use incognito mode to test multi-user

### Issue: Dark mode not persisting
**Solution**: Allow localStorage in browser settings

---

## 📚 Learning Resources

- **JavaScript DOM**: https://developer.mozilla.org/en-US/docs/Web/API/DOM
- **localStorage**: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- **Chart.js**: https://www.chartjs.org/
- **CSS Flexbox**: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

---

## ✅ Testing Checklist

Before deploying, verify:

- [ ] Register page works
- [ ] Login with new user works
- [ ] Adding transactions works
- [ ] Transactions persist after refresh
- [ ] Search and filter work together
- [ ] Charts update correctly
- [ ] Dark mode toggles
- [ ] Reset data works
- [ ] Logout works
- [ ] Different users have different data
- [ ] Responsive design looks good on mobile

---

## 🎓 Perfect For

- Learning web development basics
- Understanding JavaScript fundamentals
- Learning how to build simple web apps
- Portfolio project for beginners
- Starting point for more advanced features

---

## 📝 Future Enhancements

- Add expense categories with colored icons
- Monthly/yearly reports
- Data export to CSV/PDF
- Budget setting and alerts
- Recurring transactions
- Multi-device sync (requires backend)
- Receipt photo upload
- Spending analytics

---

## 📞 Support

For issues or questions:
1. Check the console (F12) for error messages
2. Clear browser cache and localStorage
3. Try in incognito mode
4. Restart your browser

---

**Happy Finance Tracking! 💰📊**
