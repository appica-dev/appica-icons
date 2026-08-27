<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 12.5 19 8V2.5L5 7m0 5.5V7m0 5.5L19 17M5 7l14 4.5m0 5.5L5 21.5V16l14-4.5m0 5.5v-5.5\"/>";
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
