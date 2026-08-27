<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 8l-4 4 4 4m10-8l3.111 3.111M14 4l-2.175 8.7M14 21v-4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4m-4-2h4m3-4v6\"/>";
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
