# Accessibility Testing - force-ui

Continuous accessibility testing setup to maintain WCAG 2.2 Level AA compliance.

## 🚀 Quick Start

### Run All Accessibility Tests Locally

```bash
# Start Storybook (Terminal 1)
npm run storybook

# Run accessibility tests (Terminal 2)
npm run test:a11y
```

### Run Priority Issues Test Script

```bash
npm run test:a11y:priority
```

---

## 📋 Available Test Commands

### Local Development

```bash
# Run accessibility tests with Storybook already running
npm run test:a11y

# Run tests in watch mode (re-run on changes)
npm run test:watch

# Run priority issues automated script
npm run test:a11y:priority

# Run CI-style tests (builds Storybook first)
npm run test:a11y:ci
```

### Manual Testing

```bash
# Start Storybook
npm run storybook

# In another terminal, test with axe CLI
npx @axe-core/cli http://localhost:6006/?path=/story/button--primary

# Test specific story
npx @axe-core/cli http://localhost:6006/?path=/story/input--error

# Test with pa11y
npx pa11y --standard WCAG2AA http://localhost:6006/?path=/story/dialog--simple
```

---

## 🤖 Automated Testing (CI/CD)

### GitHub Actions Workflows

**1. Storybook Tests** (`.github/workflows/storybook-tests.yml`)
- Runs on every push
- Uses `test-storybook` with axe-playwright
- Tests all stories automatically

**2. Accessibility Tests** (`.github/workflows/accessibility-tests.yml`)
- Runs on PRs to master/dev
- Runs comprehensive accessibility audit
- Posts results as PR comments if failures occur
- Uploads test artifacts for review

**3. Priority Issues Test Script** (`test-priority-issues.sh`)
- Tests specific high-priority accessibility issues
- Uses axe CLI for targeted scans
- Generates reports in `accessibility-test-results/`

### What Gets Tested

**Automated checks:**
- ✅ Color contrast (4.5:1 for text, 3:1 for UI)
- ✅ ARIA attributes (aria-label, aria-invalid, aria-busy, etc.)
- ✅ Semantic HTML (headings, landmarks, buttons)
- ✅ Form labels and associations
- ✅ Image alt text
- ✅ Keyboard accessibility (focus indicators, tab order)
- ✅ Focus management (visible indicators, no traps)

**Requires manual testing:**
- ⚠️ Screen reader announcements (NVDA, VoiceOver)
- ⚠️ Actual keyboard navigation flow
- ⚠️ Motion sensitivity (prefers-reduced-motion)
- ⚠️ 200% zoom functionality
- ⚠️ Touch target sizes (44x44px minimum)

---

## 🧪 Testing Tools

### 1. Storybook Accessibility Addon

**Built-in, no setup needed!**

When running Storybook (`npm run storybook`):
1. Open any story
2. Click "Accessibility" tab in bottom panel
3. See violations, passes, and incomplete checks

**Features:**
- Real-time scanning as you develop
- Powered by axe-core
- Color vision deficiency simulator
- Visual highlighting of issues

### 2. test-storybook (axe-playwright)

**Current setup: Already integrated!**

```bash
# Run all stories through axe
npm test

# Watch mode (re-run on changes)
npm run test:watch
```

**What it does:**
- Tests every Storybook story
- Uses Playwright to render components
- Runs axe-core accessibility checks
- Reports violations with file paths and line numbers

**Configuration:** `.storybook/test-runner.js` (if exists)

### 3. axe DevTools Browser Extension

**Install:**
- Chrome: https://chrome.google.com/webstore (search "axe DevTools")
- Firefox: https://addons.mozilla.org/firefox (search "axe DevTools")

**Usage:**
1. Open Storybook in browser
2. Open DevTools (F12)
3. Click "axe DevTools" tab
4. Click "Scan ALL of my page"
5. Review issues by severity

### 4. axe-core CLI

**Install globally:**
```bash
npm install -g @axe-core/cli
```

**Usage:**
```bash
# Scan single page
axe http://localhost:6006/?path=/story/button--primary

# Save results to JSON
axe http://localhost:6006/?path=/story/input--default \
  --save results.json

# Scan multiple pages
cat urls.txt | xargs -I {} axe {}
```

### 5. pa11y CLI

**Install globally:**
```bash
npm install -g pa11y
```

**Usage:**
```bash
# Scan with WCAG 2.2 AA standard
pa11y --standard WCAG2AA http://localhost:6006

# With custom configuration
pa11y --standard WCAG2AA \
  --reporter json \
  --threshold 10 \
  http://localhost:6006/?path=/story/dialog--simple
```

### 6. Lighthouse (Chrome DevTools)

**Built into Chrome DevTools:**
1. Open Storybook in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select "Accessibility" category
5. Click "Analyze page load"
6. Review score and issues

**Goal:** 100/100 accessibility score

---

## 🧑‍💻 Manual Testing Procedures

### Keyboard Navigation Test (5 minutes)

**Purpose:** Verify all interactive elements work without a mouse

**Steps:**
1. Open component in Storybook
2. **Unplug your mouse** (or don't use it)
3. Press **Tab** to move forward
4. Press **Shift+Tab** to move backward
5. Press **Enter** or **Space** to activate buttons
6. Press **Escape** to close modals/dropdowns

**Pass criteria:**
- ✅ All interactive elements reachable via Tab
- ✅ Focus indicator clearly visible
- ✅ Tab order matches visual flow (left-to-right, top-to-bottom)
- ✅ No keyboard traps (can always Tab out)
- ✅ Enter/Space activates buttons
- ✅ Escape closes modals/dropdowns

**Common issues:**
- ❌ No focus outline visible
- ❌ Can't Tab to custom controls (divs with onClick)
- ❌ Tab order illogical (jumps around page)
- ❌ Can Tab out of modal (should be trapped)

### Screen Reader Test (10 minutes)

**Tools:**
- **Windows:** NVDA (free) - https://www.nvaccess.org/
- **Mac:** VoiceOver (built-in) - Cmd+F5 to enable

**Steps with NVDA (Windows):**
1. Start NVDA: Ctrl+Alt+N
2. Open Storybook story
3. Navigate with:
   - **Tab** - Move to interactive elements
   - **H** - Jump to headings
   - **B** - Jump to buttons
   - **F** - Jump to form fields
   - **T** - Jump to tables
4. Listen to announcements

**Steps with VoiceOver (Mac):**
1. Enable: Cmd+F5
2. Navigate: VO+Right Arrow (VO = Ctrl+Option)
3. Rotor: VO+U (shows landmarks, headings, links)
4. Listen to announcements

**Pass criteria:**
- ✅ Images have alt text (not "unlabeled graphic")
- ✅ Buttons have accessible names (not just "button")
- ✅ Form inputs have labels (announced when focused)
- ✅ Error states announced ("invalid")
- ✅ Loading states announced ("busy")
- ✅ Modal dialogs announced ("dialog, modal")

**Common issues:**
- ❌ "Unlabeled graphic" (missing alt text)
- ❌ "Button" with no name (missing aria-label)
- ❌ "Edit" with no label (missing form label)
- ❌ Error states not announced (missing aria-invalid)
- ❌ Status updates silent (need aria-live or wp.a11y.speak)

### Motion Sensitivity Test (2 minutes)

**Purpose:** Verify animations respect user preferences

**Steps:**
1. **Enable Reduce Motion:**
   - **Mac:** System Settings → Accessibility → Display → Reduce Motion (enable)
   - **Windows:** Settings → Ease of Access → Display → Show animations (disable)
2. Reload Storybook
3. Open Dialog story
4. Click to open/close dialog
5. **Expected:** Instant state change (no fade animation)
6. **Failure:** Fade animation still plays

**Components to test:**
- Dialog (fade in/out)
- Drawer (slide in/out)
- Dropdown (fade)
- Tooltip (fade)
- Toast notifications (slide/fade)
- Charts (transitions)

**Pass criteria:**
- ✅ All animations instant when Reduce Motion enabled
- ✅ Functionality still works (just no animation)

### Contrast Test (5 minutes)

**Purpose:** Verify color contrast meets WCAG standards

**Steps:**
1. Open Storybook story
2. Right-click element → Inspect
3. In Styles panel, click color swatch
4. DevTools shows contrast ratio

**Pass criteria:**
- ✅ Normal text: 4.5:1 or higher
- ✅ Large text (18px+ or bold 14px+): 3:1 or higher
- ✅ UI components (buttons, borders): 3:1 or higher
- ✅ Focus indicators: 3:1 or higher
- ✅ Disabled states: Still readable (3:1 minimum)

**Common issues:**
- ❌ Light gray text on white (#999 on #FFF = 2.8:1, fails)
- ❌ Disabled buttons invisible
- ❌ Focus indicators too faint

### Zoom Test (2 minutes)

**Purpose:** Verify layout works at 200% zoom

**Steps:**
1. Open Storybook story
2. Zoom to 200%: Ctrl/Cmd + (repeatedly)
3. Verify:
   - No horizontal scrolling
   - All text readable
   - No overlapping content
   - Buttons/links still clickable

**Pass criteria:**
- ✅ No horizontal scroll at 200% zoom
- ✅ All content visible
- ✅ Layout adapts appropriately

---

## 📊 Interpreting Test Results

### axe-core Severity Levels

**Critical:**
- WCAG Level A violations
- Must fix - blocks users completely
- Example: Missing alt text on informative images

**Serious:**
- Likely WCAG violations
- Should fix - major barrier
- Example: Missing focus indicators

**Moderate:**
- May be WCAG violation
- Investigate - moderate barrier
- Example: Insufficient color contrast (3:1-4.5:1)

**Minor:**
- Best practice
- Consider fixing - small improvement
- Example: Missing lang attribute

### Common False Positives

**1. Color contrast on dynamic content**
- Automated tools may not account for overlays or dynamic backgrounds
- Verify manually with DevTools color picker

**2. Landmark nesting warnings**
- Sometimes landmarks inside landmarks are intentional
- Verify structure makes semantic sense

**3. "Link text is ambiguous"**
- Tool may flag "Read more" links
- Context may make it clear (surrounding text)

**4. ARIA usage warnings**
- Tool flags ARIA as "unnecessary"
- Sometimes ARIA is needed for screen reader support

**When in doubt:** Test with actual screen reader (NVDA or VoiceOver)

### What Automated Tools Miss

Automated tools catch ~30-40% of accessibility issues. They **cannot** detect:

- ❌ Keyboard traps (need manual Tab test)
- ❌ Illogical tab order (need manual Tab test)
- ❌ Poor screen reader experience (need manual SR test)
- ❌ Motion sensitivity issues (need manual test with Reduce Motion)
- ❌ Zoom/responsive issues (need manual zoom test)
- ❌ Touch target sizes on actual devices

**Always combine automated + manual testing!**

---

## 🔄 Pre-commit Hook (Optional)

Prevent accessibility regressions before they're committed.

### Setup with Husky

```bash
# Install Husky
npm install -D husky

# Initialize Husky
npx husky init

# Add pre-commit hook
echo "npm run test:a11y:priority" > .husky/pre-commit
chmod +x .husky/pre-commit
```

**What happens:**
- Before every commit, runs priority accessibility tests
- If tests fail, commit is blocked
- Fix issues before committing

**Disable for urgent commits:**
```bash
git commit --no-verify -m "urgent fix"
```

---

## 📈 Tracking Accessibility Progress

### Before Accessibility Audit (Baseline)

Run baseline scan and save results:

```bash
npm run storybook &
sleep 10
npm run test:a11y > baseline-results.txt
```

**Typical baseline:** ~150-200 violations across all components

### After Quick Wins PR (#387)

Re-run tests:

```bash
npm run test:a11y > after-quick-wins.txt
```

**Expected improvement:** ~20-30% reduction in violations

### Goal: Zero Critical/Serious Violations

**Target metrics:**
- ✅ 0 Critical violations (Level A)
- ✅ 0 Serious violations (Level AA)
- 🟡 < 10 Moderate violations (acceptable with justification)
- 🟢 < 20 Minor violations (best practices)

**Track in each PR:**
- Run `npm run test:a11y` before and after changes
- Include test results in PR description
- Ensure no new violations introduced

---

## 🎯 Acceptance Criteria for PRs

Before merging any PR that modifies components:

### Automated Tests
- [ ] `npm run test:a11y` passes (no new violations)
- [ ] Storybook a11y addon shows no critical/serious issues
- [ ] CI accessibility tests pass

### Manual Tests (when applicable)
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Screen reader tested (NVDA or VoiceOver)
- [ ] Motion preferences respected (if animations changed)
- [ ] Contrast ratios verified (if colors changed)
- [ ] 200% zoom tested (if layout changed)

### Documentation
- [ ] Accessibility considerations noted in PR description
- [ ] Breaking changes documented (if applicable)

---

## 🆘 Troubleshooting

### "Test failed: 0 stories tested"

**Problem:** Storybook not running or not accessible

**Solution:**
```bash
# Ensure Storybook is running first
npm run storybook

# In another terminal:
npm run test:a11y
```

### "Port 6006 already in use"

**Problem:** Multiple Storybook instances running

**Solution:**
```bash
# Find and kill existing Storybook
lsof -ti:6006 | xargs kill -9

# Restart Storybook
npm run storybook
```

### "Playwright not installed"

**Problem:** Missing Playwright browsers

**Solution:**
```bash
npx playwright install --with-deps
```

### False positives in tests

**Problem:** Tests fail but manual testing shows no issues

**Solution:**
1. Verify with manual testing (screen reader, keyboard)
2. If truly a false positive, document in code comments
3. Consider disabling specific rule for that element:
   ```jsx
   {/* eslint-disable-next-line jsx-a11y/rule-name */}
   <div onClick={handler}>...</div>
   ```

---

## 📚 Resources

### Documentation
- [WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)
- [Storybook Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

### Testing Tools
- [NVDA Screen Reader](https://www.nvaccess.org/) (free, Windows)
- [axe DevTools](https://www.deque.com/axe/devtools/) (browser extension)
- [WAVE](https://wave.webaim.org/extension/) (browser extension)
- [Lighthouse](https://developer.chrome.com/docs/lighthouse/) (Chrome built-in)

### Learning Resources
- [WebAIM Articles](https://webaim.org/articles/)
- [Inclusive Components](https://inclusive-components.design/)
- [A11ycasts (YouTube)](https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g)

---

## 🎉 Success Metrics

**Current Status (Post Quick Wins PR #387):**
- ✅ Motion sensitivity support (prefers-reduced-motion)
- ✅ Input error states announced (aria-invalid)
- ✅ Button loading states announced (aria-busy)
- ✅ Dialog modals properly marked (aria-modal)
- ✅ Dialog focus trapping working (FloatingFocusManager)
- ✅ Close buttons labeled (aria-label)

**Remaining Work:**
- See master tracking issue #369 for P1/P2/P3 issues

**Long-term Goals:**
- 100% automated test pass rate
- Zero critical/serious violations
- All components keyboard accessible
- All components screen reader friendly
- Full WCAG 2.2 Level AA compliance

---

**Last Updated:** February 7, 2026
**Audit Report:** [accessibility-audit-findings-2026-02-07.md](./accessibility-audit-findings-2026-02-07.md)
**Testing Guide:** [accessibility-testing-guide.md](./accessibility-testing-guide.md)
**Master Issue:** [#369](https://github.com/brainstormforce/force-ui/issues/369)
