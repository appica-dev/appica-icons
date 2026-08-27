<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15.618 20.243-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/>";
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
