# Accessibility Testing Guide - force-ui

**Created:** February 7, 2026
**For:** force-ui React component library
**Standard:** WCAG 2.2 Level AA

This guide shows how to test the 18 accessibility issues identified in the audit using the tools already available in the project.

---

## Quick Start

### 1. Automated Testing (5 minutes)

```bash
# Install global CLI tools (first time only)
npm install -g @axe-core/cli pa11y

# Start Storybook
npm run storybook
# Opens at http://localhost:6006

# In a new terminal, run automated tests
npm test
# Runs test-storybook with axe-playwright

# Or test individual components with axe CLI
axe http://localhost:6006/?path=/story/button--primary
axe http://localhost:6006/?path=/story/input--default
axe http://localhost:6006/?path=/story/dialog--simple
```

### 2. Manual Testing (15 minutes)

See detailed procedures below for keyboard navigation and screen reader testing.

---

## Testing Priority Issues

### Test #370: Dialog aria-modal

**What to test:** Dialog missing `aria-modal="true"`

**Automated:**
```bash
axe http://localhost:6006/?path=/story/dialog--simple
# Look for: "Dialog must have aria-modal attribute"
```

**Manual with NVDA:**
1. Start NVDA: Ctrl+Alt+N
2. Open Dialog story in Storybook
3. Click to open dialog
4. **Current (❌):** NVDA announces "Dialog" only
5. **Expected (✅):** Should announce "Dialog, modal"

**Fix verification:**
```typescript
// After adding aria-modal="true" to dialog.tsx:224
// Retest: NVDA should announce "Dialog, modal"
```

---

### Test #371: Dialog focus trap

**What to test:** Can Tab out of modal (should be trapped)

**Manual test:**
1. Open Dialog story in Storybook
2. Click to open dialog
3. Press Tab repeatedly
4. **Current (❌):** Focus escapes dialog, reaches background
5. **Expected (✅):** Focus cycles within dialog only

**Fix verification:**
```bash
# After implementing focus trap:
# Tab through dialog - focus should cycle
# Try Tabbing 20 times - should stay in dialog
# Shift+Tab should cycle backward
```

---

### Test #372: Button icon-only aria-label

**What to test:** Icon-only buttons have no accessible name

**Automated:**
```bash
axe http://localhost:6006/?path=/story/button--icon-only
# Look for: "Buttons must have discernible text"
```

**Manual with NVDA:**
1. Open Button story with icon-only
2. Tab to icon button
3. **Current (❌):** NVDA announces "Button" (no context)
4. **Expected (✅):** Should announce "Save changes, button" or similar

**Find icon-only buttons in codebase:**
```bash
cd /Users/sujay/Desktop/dev/force-ui
grep -r "icon={" src/components --include="*.tsx" | grep -v "children"
# Add aria-label to each
```

---

### Test #373: Input aria-invalid

**What to test:** Input with error doesn't have `aria-invalid`

**Automated:**
```bash
axe http://localhost:6006/?path=/story/input--error
# Look for: "Form elements must have aria-invalid when in error state"
```

**Manual with NVDA:**
1. Open Input story with error={true}
2. Tab to input
3. **Current (❌):** NVDA announces "Edit, Email" (no error)
4. **Expected (✅):** Should announce "Edit, Email, invalid"

**Fix verification:**
```typescript
// After adding aria-invalid to input.tsx:298, 343
// Retest: NVDA should announce "invalid" or "invalid entry"
```

---

### Test #378: prefers-reduced-motion

**What to test:** Animations play even when motion reduced

**Manual test:**
1. **Mac:** System Settings → Accessibility → Display → Reduce Motion (enable)
2. **Windows:** Settings → Ease of Access → Display → Show animations (disable)
3. Open Dialog story
4. Open/close dialog
5. **Current (❌):** Fade animation plays
6. **Expected (✅):** Instant show/hide (no animation)

**Test all animated components:**
- Button (hover transitions)
- Dialog (fade in/out)
- Drawer (slide in/out)
- Dropdown (fade)
- Tooltip (fade)
- Toaster (slide)
- All charts (transitions)

**Fix verification:**
```bash
# After adding global CSS or motion-reduce utilities:
# Enable Reduce Motion in OS
# Reload Storybook
# All components should change state instantly
```

---

### Test #379: Button aria-busy

**What to test:** Loading button doesn't announce state

**Manual with NVDA:**
1. Open Button story with loading={true}
2. Tab to loading button
3. **Current (❌):** NVDA announces "Button, Save" (no loading)
4. **Expected (✅):** Should announce "Button, Save, busy"

**Fix verification:**
```typescript
// After adding aria-busy={loading} to button.tsx:147
// Retest: NVDA should announce "busy" or "loading"
```

---

## Comprehensive Testing Workflow

### Step 1: Automated Scan (2 minutes)

**Option A: Storybook Test Runner (recommended)**
```bash
# Terminal 1: Start Storybook
npm run storybook

# Terminal 2: Run tests
npm test
# Runs all stories through axe-playwright
# Reports violations per component
```

**Option B: axe-core CLI**
```bash
# Test individual stories
axe http://localhost:6006/?path=/story/button--primary --save button-report.json
axe http://localhost:6006/?path=/story/input--default --save input-report.json
axe http://localhost:6006/?path=/story/dialog--simple --save dialog-report.json

# View results
cat button-report.json | jq '.violations[] | {id, impact, description}'
```

**Option C: pa11y CLI**
```bash
# Test with WCAG 2.2 AA standard
pa11y --standard WCAG2AA http://localhost:6006/?path=/story/button--primary
pa11y --standard WCAG2AA http://localhost:6006/?path=/story/input--default
pa11y --standard WCAG2AA http://localhost:6006/?path=/story/dialog--simple
```

**Expected results:**
- **Before fixes:** ~20-30 violations per component
- **After Quick Wins:** ~10-15 violations per component
- **After P0 fixes:** ~5-10 violations per component
- **After P1 fixes:** ~0-5 violations per component (goal)

---

### Step 2: Keyboard Navigation (5 minutes)

**Test each component:**

1. **Button component**
   - [ ] Tab to button - focus visible
   - [ ] Press Enter - button activates
   - [ ] Press Space - button activates
   - [ ] Tab to loading button - can't activate
   - [ ] Tab to icon-only button - announces purpose

2. **Input component**
   - [ ] Tab to input - focus visible
   - [ ] Type text - input works
   - [ ] Tab to input with error - error announced
   - [ ] Tab to required input - required announced
   - [ ] File input: Tab, Enter - file picker opens

3. **Dialog component**
   - [ ] Click button to open - dialog appears
   - [ ] Focus moves into dialog automatically
   - [ ] Tab repeatedly - focus stays in dialog
   - [ ] Shift+Tab - cycles backward in dialog
   - [ ] Press Escape - dialog closes
   - [ ] Focus returns to trigger button

**Common issues to look for:**
- ❌ Focus not visible (no outline)
- ❌ Can't Tab to element
- ❌ Can Tab out of modal
- ❌ Space key doesn't activate
- ❌ Focus doesn't return after modal close

---

### Step 3: Screen Reader Testing (10 minutes)

**NVDA (Windows - Free):**

**Setup:**
1. Download: https://www.nvaccess.org/
2. Install and start: Ctrl+Alt+N
3. Navigate: Tab (interactive), H (headings), B (buttons), F (forms)

**Test Button:**
```
1. Open: http://localhost:6006/?path=/story/button--primary
2. Tab to button
3. Listen: NVDA announces button name and state
4. Issues to catch:
   - "Button" with no name = missing aria-label (#372)
   - "Button, Save" when loading but no "busy" = missing aria-busy (#379)
```

**Test Input:**
```
1. Open: http://localhost:6006/?path=/story/input--error
2. Tab to input with error
3. Listen: NVDA announces invalid state
4. Issues to catch:
   - No "invalid" announcement = missing aria-invalid (#373)
   - Error message not read = missing aria-describedby (#376)
   - No "required" announcement = missing required attribute (#381)
```

**Test Dialog:**
```
1. Open: http://localhost:6006/?path=/story/dialog--simple
2. Click to open dialog
3. Listen: NVDA announces dialog opened
4. Issues to catch:
   - "Dialog" without "modal" = missing aria-modal (#370)
   - No dialog title announced = missing aria-labelledby (#374)
   - Focus didn't move = no initial focus management (#375)
5. Tab around dialog
6. Issues to catch:
   - Can Tab to background = no focus trap (#371)
7. Close dialog (Escape or close button)
8. Issues to catch:
   - Focus lost = no focus return (#384)
```

**VoiceOver (Mac - Built-in):**
```
1. Enable: Cmd+F5
2. Navigate: VO+Right Arrow (VO = Ctrl+Option)
3. Test same components as NVDA above
4. Similar issues should be caught
```

---

### Step 4: Contrast Testing (2 minutes)

**Browser DevTools:**
1. Open Storybook story
2. Inspect element (right-click → Inspect)
3. In Styles panel, click color swatch
4. DevTools shows contrast ratio

**Verify:**
- ✅ Normal text: 4.5:1 or higher
- ✅ Large text (18px+): 3:1 or higher
- ✅ Buttons/borders: 3:1 or higher
- ✅ Disabled states: 3:1 or higher (still readable)
- ✅ Focus indicators: 3:1 or higher

**Test these token values:**
```bash
# Find color definitions
cd /Users/sujay/Desktop/dev/force-ui
grep -r "text-text-disabled\|bg-button-disabled\|border-disabled" src/
# Check actual color values in your design system
```

---

### Step 5: Visual Regression Testing (Optional)

**Before/After Screenshots:**
```bash
# Before implementing fixes
npm run build-storybook
# Take screenshots of all components

# After implementing fixes
npm run build-storybook
# Compare screenshots - visual changes should be minimal

# Tools for automated visual testing:
# - Chromatic (chromatic.com) - already in package.json
# - Percy (percy.io)
# - BackstopJS
```

---

## Automated Test Scripts

### Script 1: Quick Violations Check

Create `scripts/test-a11y.sh`:

```bash
#!/bin/bash
# Quick accessibility violations check

echo "Starting Storybook..."
npm run storybook &
STORYBOOK_PID=$!
sleep 30  # Wait for Storybook to start

echo "Running accessibility tests..."

# Test priority components
axe http://localhost:6006/?path=/story/button--primary > reports/button.txt
axe http://localhost:6006/?path=/story/input--default > reports/input.txt
axe http://localhost:6006/?path=/story/dialog--simple > reports/dialog.txt

echo "Tests complete. Results in reports/"

# Count violations
BUTTON_VIOLATIONS=$(grep -c "violation" reports/button.txt)
INPUT_VIOLATIONS=$(grep -c "violation" reports/input.txt)
DIALOG_VIOLATIONS=$(grep -c "violation" reports/dialog.txt)

echo "Button: $BUTTON_VIOLATIONS violations"
echo "Input: $INPUT_VIOLATIONS violations"
echo "Dialog: $DIALOG_VIOLATIONS violations"

# Stop Storybook
kill $STORYBOOK_PID
```

**Usage:**
```bash
chmod +x scripts/test-a11y.sh
./scripts/test-a11y.sh
```

---

### Script 2: Test All Components

```bash
#!/bin/bash
# Test all components with pa11y

mkdir -p reports

# Get all stories
STORIES=(
  "button--primary"
  "button--loading"
  "input--default"
  "input--error"
  "dialog--simple"
  "drawer--default"
  "dropdown-menu--default"
  # Add more stories...
)

for story in "${STORIES[@]}"; do
  echo "Testing $story..."
  pa11y --standard WCAG2AA \
    --reporter json \
    "http://localhost:6006/?path=/story/$story" \
    > "reports/$story.json"
done

echo "All tests complete. Results in reports/"
```

---

## CI/CD Integration

### GitHub Actions Workflow

Create `.github/workflows/accessibility.yml`:

```yaml
name: Accessibility Tests

on: [pull_request]

jobs:
  a11y-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build Storybook
        run: npm run build-storybook

      - name: Run accessibility tests
        run: npm test

      - name: Upload results
        if: failure()
        uses: actions/upload-artifact@v3
        with:
          name: a11y-violations
          path: test-results/
```

---

## Interpreting Results

### Automated Tool Results

**axe-core violations:**
- **Critical:** WCAG Level A - MUST fix (e.g., missing aria-modal)
- **Serious:** Likely WCAG failure - Should fix (e.g., color contrast)
- **Moderate:** May be failure - Investigate (e.g., link text)
- **Minor:** Best practice - Consider fixing

**Common violations to expect (before fixes):**

1. **"Dialogs must have aria-modal"**
   - Issue: #370
   - Component: Dialog
   - Fix: Add `aria-modal="true"`

2. **"Buttons must have discernible text"**
   - Issue: #372
   - Component: Button (icon-only)
   - Fix: Add `aria-label`

3. **"Form elements must have aria-invalid"**
   - Issue: #373
   - Component: Input (error state)
   - Fix: Add `aria-invalid={error}`

4. **"Focus must be contained in modal dialogs"**
   - Issue: #371
   - Component: Dialog
   - Fix: Implement focus trap

5. **"Elements must have sufficient color contrast"**
   - Pattern: Color contrast
   - All components
   - Fix: Verify design tokens

---

## Testing Checklist for Each PR

Use this checklist when implementing accessibility fixes:

### Before Merging PR:
- [ ] Automated scan passes (axe/pa11y)
- [ ] Keyboard navigation tested manually
- [ ] Screen reader tested (NVDA or VoiceOver)
- [ ] Contrast ratios verified
- [ ] No visual regressions
- [ ] Tests pass in multiple browsers (Chrome, Firefox, Safari)
- [ ] Storybook a11y addon shows no violations
- [ ] Documentation updated if needed

---

## Quick Wins Testing Priority

Test these first after implementing Quick Wins:

1. **#370 - aria-modal** (5 min fix)
   - Test: Open dialog, check with NVDA
   - Expected: Announces "modal"

2. **#378 - motion preferences** (30 min fix)
   - Test: Enable Reduce Motion, test all animated components
   - Expected: Instant state changes

3. **#373 - aria-invalid** (5 min fix)
   - Test: Input with error, check with NVDA
   - Expected: Announces "invalid"

4. **#379 - aria-busy** (5 min fix)
   - Test: Loading button, check with NVDA
   - Expected: Announces "busy"

5. **#385 - close button focus** (5 min fix)
   - Test: Tab to close button
   - Expected: Focus outline visible

**Total Quick Wins testing: 15-20 minutes**

---

## Resources

### Testing Tools
- **Storybook a11y addon:** Built-in (already installed)
- **axe DevTools:** https://www.deque.com/axe/devtools/ (browser extension)
- **WAVE:** https://wave.webaim.org/extension/ (browser extension)
- **Lighthouse:** Built into Chrome DevTools
- **NVDA:** https://www.nvaccess.org/ (free screen reader)
- **axe-core CLI:** `npm install -g @axe-core/cli`
- **pa11y CLI:** `npm install -g pa11y`

### Documentation
- **WCAG 2.2 Quick Reference:** https://www.w3.org/WAI/WCAG22/quickref/
- **ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/
- **React Accessibility:** https://react.dev/learn/accessibility
- **Testing with NVDA:** https://webaim.org/articles/nvda/

---

## Support

**Questions about testing?**
- See main audit report: `accessibility-audit-findings-2026-02-07.md`
- GitHub issues: #369-#386
- Storybook: http://localhost:6006

**Found an issue not in the audit?**
- Create new GitHub issue with "accessibility" label
- Include: Component, expected behavior, actual behavior, WCAG criterion

---

**Last Updated:** February 7, 2026
**Audit Version:** 1.0.0
**Tooling:** @storybook/addon-a11y v8.3.5, axe-playwright v2.0.3
