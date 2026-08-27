<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v14a1.78 1.78 0 0 0 3.1 1.4 1.65 1.65 0 0 1 2.6 0 1.652 1.652 0 0 0 2.6 0 1.652 1.652 0 0 1 2.6 0A1.78 1.78 0 0 0 19 19v-7m-5-9 5 5m0 0v4.25\"/>";
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
