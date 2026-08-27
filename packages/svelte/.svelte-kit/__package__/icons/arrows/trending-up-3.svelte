<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m18 5 3 3m0 0-3 3m3-3h-3.397a5 5 0 0 0-4.096 2.133l-4.014 5.734A5 5 0 0 1 5.397 18H3\"/>";
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
