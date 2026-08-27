<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.04 10.005h2.965V7.04l-3.46-3.46a5.932 5.932 0 0 1 7.909 7.91l5.932 5.93a2.097 2.097 0 1 1-2.966 2.967l-5.932-5.932A5.932 5.932 0 0 1 3.58 6.545z\"/>";
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
