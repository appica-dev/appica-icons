<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 16a4 4 0 1 1 0-8m-9 4h1m8-9v1m0 16v1M5.6 5.6l.7.7m0 11.4-.7.7M20 7l-3 5h4l-3 5\"/>";
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
