<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.5 10.96 2 2.51 2.5-2.51 2 3.013 2.5-2.009M3 20h18L14.079 5.322A2.31 2.31 0 0 0 12 4a2.29 2.29 0 0 0-2.079 1.322z\"/>";
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
