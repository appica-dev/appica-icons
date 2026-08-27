<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 18l2 2 4-4M4 7.05c0 .553.717.902 2.152 1.6l2.614 1.272c1.613.785 2.42 1.178 3.287 1.178M4 7.05c0-.553.717-.902 2.152-1.6l2.614-1.272C10.378 3.393 11.185 3 12.052 3s1.674.393 3.287 1.178l2.614 1.272c1.434.698 2.152 1.047 2.152 1.6M4 7.05v9.595c0 1.244 1.741 1.984 5.222 3.463 1.399.594 2.098.892 2.83.892v-9.9m8.052-4.05c0 .553-.717.902-2.152 1.6L15.34 9.922c-1.613.785-2.42 1.178-3.287 1.178m8.052-4.05V12M6.684 12l1.789.9m8.052-8.1L7.578 9.3\"/>";
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
