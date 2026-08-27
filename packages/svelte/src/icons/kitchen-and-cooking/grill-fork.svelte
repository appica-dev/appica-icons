<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5 5 11.5 11.5M3 7l3.05 3.15a2.9 2.9 0 0 0 4.1-4.1L7 3m12.347 13.575 1.08 1.079a1.96 1.96 0 0 1-2.773 2.772l-1.08-1.079a1.96 1.96 0 0 1 2.773-2.772\"/>";
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
