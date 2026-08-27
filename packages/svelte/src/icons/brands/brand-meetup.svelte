<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.455 10.82C6.39 8.657 8.5 7 11 7c2.104 0 2.844 1.915 2 4m0 0-2 6m2-6c.937-2.16 3.071-3.802 5.42-3.972 2.104 0 3.128 1.706 2.284 3.792l-2.454 6.094C17.397 18.59 19 19.5 21 19M6.981 7 3 16.914\"/>";
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
