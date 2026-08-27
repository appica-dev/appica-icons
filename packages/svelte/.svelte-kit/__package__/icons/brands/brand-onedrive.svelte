<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18.456 10.45a6.45 6.45 0 0 0-12-2.151 4.857 4.857 0 0 0-3.92 7.063 4.85 4.85 0 0 0 4.716 2.622h10.751a3.773 3.773 0 0 0 .452-7.532z\"/>";
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
