<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m7.05 11.293 4.242-4.243a2 2 0 0 1 2.828 0m0 0 2.83 2.83a2 2 0 0 1 0 2.828l-4.244 4.243a2 2 0 0 1-2.828 0L7.05 14.12a2 2 0 0 1 0-2.828M14.12 7.05l1.25-2.913a1.5 1.5 0 0 1 2.44-.47l2.215 2.217a1.5 1.5 0 0 1-.697 2.516l-3.086.772m-7.07 7.071-.773 3.086a1.5 1.5 0 0 1-2.516.697L3.666 17.81a1.5 1.5 0 0 1 .47-2.44l2.913-1.248\"/>";
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
