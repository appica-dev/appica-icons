<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H2V6a1 1 0 0 1 1-1h14c1.326 0 2.598.737 3.535 2.05S22 10.143 22 12M8 17h8m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-5m0 0h-4.5L16 5M2 10h15M7 5v5m5-5v5\"/>";
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
