<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 3a12.03 12.03 0 0 0 8.512 3A11.985 11.985 0 0 1 16.3 18.904 12 12 0 0 1 12 21m0-18a12.03 12.03 0 0 1-8.512 3A11.98 11.98 0 0 0 7.7 18.904c1.278.98 2.74 1.692 4.299 2.096m0-18v18\"/>";
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
