<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6.5 9.5 1.546-1.311M14 5.5 17 7m1.5 3-1.185 3.318m-1.062 2.972L16 17m-2.5.5-7-5M3 3l18 18M10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0m7 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
