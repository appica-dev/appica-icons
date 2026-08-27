<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 13v.01M10 16v.01m4-.01v.01M7.5 8h9m-9 0 .28-2.248A2 2 0 0 1 9.768 4h4.468a2 2 0 0 1 1.985 1.752L16.5 8m-9 0L5.89 17.671A2 2 0 0 0 7.862 20h8.278a2 2 0 0 0 1.973-2.329L16.5 8\"/>";
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
