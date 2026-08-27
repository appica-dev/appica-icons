<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.138 15.215A5 5 0 0 1 12 13.97a4.99 4.99 0 0 0-7 0m0 0V4.935a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v7.027M5 13.969v7.027M19 22v-6.023m0 0 3 3.011m-3-3.011-3 3.011\"/>";
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
