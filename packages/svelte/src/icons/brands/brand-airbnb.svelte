<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 18.5c-1.528-1.965-3.045-4-3.045-5.5q0-3 3.045-3t3.045 3c0 1.5-1.517 3.535-3.045 5.5m0 0c1.015 1 1.522 1.5 2.537 2s2.538 1 4.568-.5 1.522-3.5.507-6-2.368-5.5-5.075-9.5c-.846-1-1.522-1.5-2.54-1.5-1.015 0-1.647.45-2.534 1.5-2.707 4-4.06 7-5.075 9.5s-1.522 4.5.508 6 3.552 1 4.567.5 1.522-1 2.537-2\"/>";
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
