<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.636 18.364A9.001 9.001 0 0 1 18.364 5.636M5.636 18.364A9 9 0 0 0 18.364 5.636M5.636 18.364 18.364 5.636\"/>";
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
