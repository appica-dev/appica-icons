<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21.015 3.035 4.5 19.5m-1.327-1.881a4.63 4.63 0 0 0 3.284 3.26 4.67 4.67 0 0 0 4.487-1.194c1.85-1.836 4.07-10.65 4.07-10.65s-8.88 2.296-10.639 4.132a4.59 4.59 0 0 0-1.202 4.452\"/>";
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
