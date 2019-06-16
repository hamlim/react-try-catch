export default function TryCatch({ attempt, fallback = null }) {
  let res = fallback
  try {
    res = attempt()
  } catch (e) {
    res = fallback
  }
  return res
}
