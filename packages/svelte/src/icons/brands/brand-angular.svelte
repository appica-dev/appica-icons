<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.964 15.083 12 6.986l3.036 8.095m-5.06-2.023h4.048m-8.675 4.295 6.149 3.513a1.01 1.01 0 0 0 1.004 0l6.149-3.513a1.01 1.01 0 0 0 .5-.742l1.34-9.82a1.01 1.01 0 0 0-.666-1.091l-7.489-2.643a1 1 0 0 0-.673 0L4.175 5.702a1.01 1.01 0 0 0-.666 1.09l1.34 9.82a1.01 1.01 0 0 0 .5.742\"/>";
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
