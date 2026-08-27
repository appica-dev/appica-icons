<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.722 11.067 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l5.615-1.903M18 22l3.35-3.284a2.14 2.14 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.128-.006l-.224.22-.224-.22a2.24 2.24 0 0 0-3.127-.006 2.144 2.144 0 0 0-.006 3.071z\"/>";
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
