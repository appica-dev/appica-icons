<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 14v1a6 6 0 1 0 12 0V6a3 3 0 0 1 6 0M3 14c0 .821 1.481 1.526 3.604 1.834l.5.064C7.7 15.964 8.337 16 9 16q.951 0 1.897-.102l.5-.064C13.518 15.526 15 14.82 15 14s-1.481-1.526-3.604-1.834l-.5-.064A17 17 0 0 0 9 12q-.951 0-1.897.102l-.5.064C4.482 12.474 3 13.18 3 14\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
